import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DeckConfig } from '../types/deck';

export interface PDFExportOptions {
  deck: DeckConfig;
  includePopups?: boolean;
  showAllSubtext?: boolean;
}

const waitForImages = (element: HTMLElement): Promise<void> => {
  const images = element.querySelectorAll('img');
  const promises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Continue even if image fails
    });
  });
  return Promise.all(promises).then(() => {});
};

export const exportDeckToPDF = async (options: PDFExportOptions): Promise<void> => {
  const { deck, includePopups = true, showAllSubtext = true } = options;
  
  try {
    // Create PDF instance
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
    
    let isFirstPage = true;
    
    // Get all slide elements
    const slideElements = document.querySelectorAll('[data-slide-index]');
    
    for (let i = 0; i < slideElements.length; i++) {
      const slideElement = slideElements[i] as HTMLElement;
      const slideKey = slideElement.getAttribute('data-slide-key');
      
      if (!isFirstPage) {
        pdf.addPage();
      }
      
      // Temporarily show all subtext if needed
      if (showAllSubtext) {
        const subtextElements = slideElement.querySelectorAll('[data-subtext-hidden]');
        subtextElements.forEach(el => {
          (el as HTMLElement).style.display = 'block';
        });
        
        // Also trigger subtext visibility for AI Finance deck slides
        if (slideKey === 'Introductions' || slideKey === 'About' || slideKey === 'Objectives') {
          const buttons = slideElement.querySelectorAll('button');
          buttons.forEach(button => {
            if (button.textContent?.includes('Show Details') || 
                button.textContent?.includes('Show Background') || 
                button.textContent?.includes('Show Goals')) {
              button.click();
            }
          });
        }
      }
      
      // Wait for images to load
      await waitForImages(slideElement);
      
      // Small delay to ensure all animations and state changes are complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Capture the slide
      const canvas = await html2canvas(slideElement, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#000000',
        width: slideElement.offsetWidth,
        height: slideElement.offsetHeight,
        ignoreElements: (element) => {
          // Ignore navigation elements
          return element.classList.contains('fixed') && 
                 (element.classList.contains('left-4') || element.classList.contains('right-4'));
        }
      });
      
      // Add to PDF
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Handle popups for slides that have them
      if (includePopups && (slideKey === 'Players' || slideKey === 'Prompting')) {
        // Add another page for the popup
        pdf.addPage();
        
        // Find and click the popup button
        const popupButton = slideElement.querySelector('button[data-popup-trigger]') || 
                           slideElement.querySelector('.absolute.bottom-4 button');
        
        if (popupButton) {
          (popupButton as HTMLButtonElement).click();
          
          // Wait for popup to appear
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Capture the popup
          const popupElement = document.querySelector('[data-popup-content]') || 
                              document.querySelector('.fixed.inset-0');
          
          if (popupElement) {
            await waitForImages(popupElement as HTMLElement);
            
            const popupCanvas = await html2canvas(popupElement as HTMLElement, {
              scale: 1.5,
              useCORS: true,
              allowTaint: true,
              backgroundColor: '#000000'
            });
            
            const popupImgData = popupCanvas.toDataURL('image/png');
            pdf.addImage(popupImgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            
            // Close the popup
            const closeButton = popupElement.querySelector('button[aria-label="Close"]');
            const svgButton = popupElement.querySelector('svg')?.closest('button');
            const buttonToClick = closeButton || svgButton;
            if (buttonToClick) {
              (buttonToClick as HTMLButtonElement).click();
            }
          }
        }
      }
      
      // Restore hidden subtext
      if (showAllSubtext) {
        const subtextElements = slideElement.querySelectorAll('[data-subtext-hidden]');
        subtextElements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      }
      
      isFirstPage = false;
    }
    
    // Download the PDF
    const fileName = `${deck.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};

export const downloadCurrentDeck = async (deck: DeckConfig): Promise<void> => {
  // Show loading state
  const button = document.querySelector('[data-pdf-download]') as HTMLButtonElement;
  if (button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span>Generating PDF...</span>';
    button.disabled = true;
    
    try {
      await exportDeckToPDF({
        deck,
        includePopups: true,
        showAllSubtext: true
      });
    } finally {
      button.innerHTML = originalText;
      button.disabled = false;
    }
  } else {
    await exportDeckToPDF({
      deck,
      includePopups: true,
      showAllSubtext: true
    });
  }
}; 
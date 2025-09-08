import { useEffect, useRef } from 'react';

interface PayPalDonateButtonProps {
  hostedButtonId: string;
  containerId: string;
}

export const PayPalDonateButton = ({ hostedButtonId, containerId }: PayPalDonateButtonProps) => {
  const paypalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Asegurarse de que el contenedor existe y que paypal está disponible
    if (paypalContainerRef.current && window.paypal) {
      // Limpiar el contenedor antes de renderizar
      paypalContainerRef.current.innerHTML = '';
      
      try {
        // Renderizar el botón de PayPal
        window.paypal.HostedButtons({
          hostedButtonId: hostedButtonId,
        }).render(`#${containerId}`);
      } catch (error) {
        console.error('Error al renderizar el botón de PayPal:', error);
      }
    }
  }, [hostedButtonId, containerId]);

  return <div id={containerId} ref={paypalContainerRef}></div>;
};

// Declaración para TypeScript
declare global {
  interface Window {
    paypal: {
      HostedButtons: (config: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}
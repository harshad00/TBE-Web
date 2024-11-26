import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import CertificateContent from './CertificateContent';
import { CertificateDataPoints } from '@/interfaces';

const CertificateModal = ({
  isOpen,
  closeModal,
  certificateDataPoints,
}: {
  isOpen: boolean;
  closeModal: () => void;
  certificateDataPoints: CertificateDataPoints;
}) => {
  const { username, courseName, date } = certificateDataPoints;
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (certificateRef.current) {
      try {
        const dataUrl = await toPng(certificateRef.current, { quality: 1 });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${username}-${courseName}.png`;
        link.click();
      } catch (error) {
        console.error('Error generating certificate image:', error);
      }
    }
  };

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10'
      onClose={closeModal}
    >
      <div className='fixed inset-0 bg-black bg-opacity-30' />
      <div className='fixed inset-0 z-10 flex items-center justify-center p-2'>
        <DialogPanel className='w-full max-w-lg rounded-lg bg-white shadow-lg p-2'>
          <div className='flex justify-between items-center mb-2'>
            <DialogTitle className='text-md font-semibold'>
              Your Certificate
            </DialogTitle>
            <button onClick={closeModal} className='text-md'>
              ✖
            </button>
          </div>
          <div ref={certificateRef} className='bg-gray-100 border'>
            <CertificateContent
              username={username}
              courseName={courseName}
              date={date}
            />
          </div>
          <div className='mt-2 text-center'>
            <button
              onClick={handleDownload}
              className='rounded bg-blue-500 py-1 px-2 text-white hover:bg-blue-600 focus:outline-none'
            >
              Download Certificate
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CertificateModal;

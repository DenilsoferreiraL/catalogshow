import { useEffect, useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './button';

export function ExpandableImage({ src, alt }: { src: any; alt: string }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }


        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <div className="relative">
            <Image
                src={src}
                alt={alt}
                className="object-cover rounded-lg"
                priority
            />
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                <Maximize2 size={20} />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            className="max-w-[100vw] max-h-[100vh] object-contain rounded-lg"
                        />
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="
                        relative top-7 left-1/2
                        bg-white bg-opacity-40
                        sm:bg-black sm:bg-opacity-50
                        sm:absolute sm:top-4 sm:right-4 sm:left-auto
                        text-white p-4 rounded-full z-50
                    "
                        >
                            ✕
                        </Button>

                    </motion.div>
                </div>
            )}
        </div>
    );
}

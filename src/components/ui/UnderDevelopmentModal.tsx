import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

interface UnderDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnderDevelopmentModal = ({ isOpen, onClose }: UnderDevelopmentModalProps) => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate the next launch time (24 hours from when modal opens)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isOpen) {
      // Calculate the next day at the same time
      const now = new Date();
      const nextLaunch = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now

      // Update the countdown every second
      interval = setInterval(() => {
        const currentTime = new Date();
        const difference = nextLaunch.getTime() - currentTime.getTime();

        if (difference > 0) {
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ hours, minutes, seconds });
        } else {
          // Reset to next 24 hours if time is up
          const newNextLaunch = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
          const newDifference = newNextLaunch.getTime() - currentTime.getTime();
          const hours = Math.floor((newDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((newDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((newDifference % (1000 * 60)) / 1000);

          setTimeLeft({ hours, minutes, seconds });
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Particles Background */}
          <div className="absolute inset-0">
            <ParticlesBackground />
          </div>

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl p-8 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, rotateX: 15, rotateY: 15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: -15, rotateY: -15 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200, duration: 0.5 }}
          >
            {/* 3D Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 rounded-2xl blur-sm opacity-70" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-background/50 border border-border hover:bg-accent transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* 3D Card Effect for Header */}
              <motion.div
                className="inline-block mb-6"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="relative">
                  {/* Glowing Effect */}
                  <div className="absolute -inset-4 bg-primary/30 rounded-full blur-xl animate-pulse" />

                  {/* Main Icon Container */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                    {/* Inner Circle */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      {/* Core Icon */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="font-heading text-3xl font-bold mb-2 text-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Netomi App Launch
              </motion.h3>

              <motion.p
                className="text-lg text-muted-foreground mb-2 max-w-md mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The countdown has begun!
              </motion.p>

              {/* Countdown Timer */}
              <motion.div
                className="my-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">APP Launch In:</h4>
                <div className="flex justify-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">Seconds</span>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-muted-foreground text-sm">
                  Be ready for the launch! Follow our socials for updates.
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://x.com/NetomiNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <span>Follow</span>
                    <span className="text-primary">Twitter</span>
                  </a>
                  <a
                    href="https://t.me/NetomiMain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium flex items-center gap-2"
                  >
                    <span>Join</span>
                    <span className="text-primary">Telegram</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UnderDevelopmentModal;
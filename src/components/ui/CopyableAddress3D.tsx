import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CopyableAddress3DProps {
  address: string;
  label?: string;
  className?: string;
  showFullAddress?: boolean;
}

const CopyableAddress3D = ({ address, label = "$NTM Official CA", className = "", showFullAddress = false }: CopyableAddress3DProps) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy address: ", err);
    }
  };

  // Reset the copied state after animation completes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [copied]);

  // Format the address based on showFullAddress prop
  const displayAddress = showFullAddress ? address : `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {label && (
        <span className="text-xs text-muted-foreground mb-1 block">{label}</span>
      )}

      <div className="flex items-center gap-2">
        <motion.div
          className="flex-1 px-4 py-3 text-base font-mono bg-gradient-to-r from-card/80 to-primary/5 rounded-xl border border-border/50 backdrop-blur-lg flex items-center justify-between overflow-hidden"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="text-primary font-medium truncate">{displayAddress}</span>
          <motion.button
            onClick={copyToClipboard}
            className="p-1.5 rounded-lg bg-background/50 border border-border hover:bg-primary/10 transition-colors focusable ml-2 flex-shrink-0"
            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary)/0.1)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Copy address"
          >
            {copied ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <Check size={14} className="text-primary" />
              </motion.div>
            ) : (
              <Copy size={14} className="text-muted-foreground" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Glow effect when copied */}
      {copied && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary/20 blur-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default CopyableAddress3D;
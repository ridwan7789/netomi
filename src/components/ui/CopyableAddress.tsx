import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyableAddressProps {
  address: string;
  label?: string;
  className?: string;
}

const CopyableAddress = ({ address, label = "Contract Address", className = "" }: CopyableAddressProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy address: ", err);
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <span className="text-xs text-muted-foreground mb-1">{label}</span>}
      <div className="flex items-center gap-2">
        <div className="flex-1 px-3 py-2 text-sm font-mono bg-muted rounded-lg border border-border overflow-hidden">
          <span className="truncate">{address}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg border border-border hover:bg-accent transition-colors focusable flex-shrink-0"
          aria-label="Copy address"
        >
          {copied ? (
            <Check size={16} className="text-primary" />
          ) : (
            <Copy size={16} className="text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CopyableAddress;
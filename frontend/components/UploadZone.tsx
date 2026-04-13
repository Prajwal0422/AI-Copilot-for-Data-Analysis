import { motion } from "framer-motion";
import { Upload } from "lucide-react";

interface UploadZoneProps {
  onUpload?: (file: File) => void;
}

export default function UploadZone({ onUpload }: UploadZoneProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-blue-500/50 hover:bg-slate-800/30 transition-all cursor-pointer"
    >
      <Upload className="w-6 h-6 mx-auto mb-2 text-slate-500" />
      <p className="text-xs text-slate-500">Drop CSV here</p>
    </motion.div>
  );
}

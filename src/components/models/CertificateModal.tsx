import { X, ExternalLink, Award, Calendar, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Certificate } from "../../types/certificate.type";

interface CertificateModalProps {
  certificate: Certificate | null | undefined;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="certificate-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-20 w-full max-w-3xl max-h-[90vh] overflow-y-auto
                     bg-linear-to-br from-slate-900 via-gray-900 to-slate-950
                     border border-gray-700/60 rounded-2xl shadow-2xl shadow-blue-500/10 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full
                       bg-black/50 hover:bg-blue-600/80 text-gray-300 hover:text-white
                       border border-gray-700 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Certificate Image Preview */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl bg-gray-950 group">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            {/* Category badge */}
            <span className="absolute bottom-4 left-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/30">
              {certificate.category}
            </span>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Issuer Header */}
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-1">
                <Award className="w-4 h-4" />
                <span>{certificate.issuer}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {certificate.title}
              </h2>
            </div>

            {/* Meta details (Date & Credential ID) */}
            <div className="flex flex-wrap gap-4 py-3 border-y border-gray-800 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Issued: <strong className="text-white">{certificate.issueDate}</strong></span>
              </div>

              {certificate.credentialId && (
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Credential ID: <strong className="text-gray-200 font-mono text-xs">{certificate.credentialId}</strong></span>
                </div>
              )}
            </div>

            {/* Description */}
            {certificate.description && (
              <div>
                <h3 className="text-base font-semibold text-white mb-2">About this Certification</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {certificate.description}
                </p>
              </div>
            )}

            {/* Key Skills */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3">Skills & Technologies Validated</h3>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full
                               bg-blue-500/10 text-blue-300
                               border border-blue-500/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-gray-800">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 font-medium transition"
              >
                Close
              </button>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

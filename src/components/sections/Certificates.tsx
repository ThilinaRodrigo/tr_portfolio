import { useState } from "react";
import { certificates } from "../../data/certificates";
import CertificateModal from "../models/CertificateModal";
import { type Certificate } from "../../types/certificate.type";
import { ExternalLink, Eye, Award, Calendar } from "lucide-react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const loadLess = () => {
    setVisibleCount((prev) => Math.max(prev - 3, 6));
  };

  return (
    <section
      id="certificates"
      className="min-h-screen bg-transparent text-white px-6 lg:px-8 py-20 border-t border-gray-800/40 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Qualifications & Achievements</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Certificates & <span className="text-blue-500">Credentials</span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Verified certifications and professional qualifications validating my technical expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, visibleCount).map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-br from-gray-800/40 via-gray-900/50 to-black/60
                         backdrop-blur-md border border-gray-800/80 rounded-2xl overflow-hidden
                         hover:border-blue-500/50 transition-all duration-500
                         hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-gray-950">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay for quick action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => {
                        setSelectedCertificate(cert);
                        setOpenModal(true);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </button>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-gray-800/90 hover:bg-gray-700 text-white transition-all shadow-lg border border-gray-600/50"
                        title="Verify credential link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Issuer Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-semibold text-blue-400 border border-blue-500/30">
                    {cert.issuer}
                  </span>

                  {/* Date Badge */}
                  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gray-900/80 backdrop-blur-md rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    {cert.issueDate}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4">
                  <h3
                    onClick={() => {
                      setSelectedCertificate(cert);
                      setOpenModal(true);
                    }}
                    className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
                  >
                    {cert.title}
                  </h3>

                  {cert.description && (
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-gray-800/50 mt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedCertificate(cert);
                    setOpenModal(true);
                  }}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  Details
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < certificates.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-transparent border border-blue-600 rounded-lg font-semibold hover:bg-blue-600/10 transition text-blue-400"
            >
              Load More
            </button>
          </div>
        )}

        {/* Load Less Button */}
        {visibleCount > 6 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadLess}
              className="px-8 py-3 bg-transparent border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition text-gray-400"
            >
              Show Less
            </button>
          </div>
        )}
      </div>

      {/* Certificate Detail Modal */}
      {openModal && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setOpenModal(false)}
        />
      )}
    </section>
  );
}

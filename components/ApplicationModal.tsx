import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitForm } from '../services/submissionService';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ApplicationType = 'INTERNSHIP' | 'FULL-TIME';

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
    // Form State
    const [appType, setAppType] = useState<ApplicationType>('INTERNSHIP');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        linkedin: '',
        portfolio: '',
        resumeUrl: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const appTypeMap: Record<ApplicationType, 'internship' | 'fulltime'> = {
            'INTERNSHIP': 'internship',
            'FULL-TIME': 'fulltime'
        };

        const currentAppType = appTypeMap[appType];

        console.log("Submitting Application:", { type: appType, mappedTo: currentAppType });

        const success = await submitForm({
            applicationType: currentAppType,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            role: formData.role,
            linkedin: formData.linkedin,
            portfolio: formData.portfolio,
            resumeUrl: formData.resumeUrl
        });

        setIsSubmitting(false);

        if (success) {
            setIsSuccess(true);
        } else {
            alert("Something went wrong. Please try again later.");
            console.error("Application submission failed");
        }
    };

    const resetModal = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            location: '',
            role: '',
            linkedin: '',
            portfolio: '',
            resumeUrl: '',
            message: ''
        });
        setAppType('INTERNSHIP');
        setIsSuccess(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={resetModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#0a0a0a]/90 border border-white/10 rounded-2xl shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={resetModal}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        {!isSuccess ? (
                            <div className="p-8 md:p-10 space-y-8">
                                {/* Header */}
                                <div className="text-center">
                                    <h2 className="text-2xl md:text-3xl font-syncopate font-bold text-white mb-2">Apply to Vatalique</h2>
                                    <p className="text-gray-400 text-sm md:text-base">Build systems. Learn fast. Own what you ship.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* SECTION 1: TYPE */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Applying For *</label>
                                        <div className="grid grid-cols-2 gap-4 p-1 bg-white/5 rounded-xl border border-white/5">
                                            {['INTERNSHIP', 'FULL-TIME'].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setAppType(type as ApplicationType)}
                                                    className={`py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${appType === type
                                                        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* SECTION 2: DETAILS */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Basic Details</label>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input
                                                required
                                                placeholder="Full Name *"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address *"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Phone Number *"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                            <input
                                                required
                                                placeholder="Location (City, Country) *"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.location}
                                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            />
                                        </div>
                                        <input
                                            required
                                            placeholder="Area of Interest / Role *"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors mt-2"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        />
                                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                                            <input
                                                placeholder="LinkedIn Profile (Optional)"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.linkedin}
                                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                            />
                                            <input
                                                placeholder="Portfolio / GitHub / Website (Optional)"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                                value={formData.portfolio}
                                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* SECTION 3: RESUME */}
                                    {/* SECTION 3: RESUME */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Resume / CV *</label>
                                        <input
                                            required
                                            type="url"
                                            placeholder="Paste your resume link here"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                            value={formData.resumeUrl}
                                            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                                        />
                                        <p className="text-[10px] text-gray-500">(Upload your resume to Google Drive and share the link here)</p>
                                    </div>

                                    {/* SECTION 4: MESSAGE */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Why Vatalique? (Optional)</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us what drives you..."
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    {/* SUBMIT */}
                                    <div className="pt-4 border-t border-white/10">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3
                                                ${isSubmitting
                                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                                    : 'bg-white text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                                                }
                                            `}
                                        >
                                            {isSubmitting && (
                                                <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            )}
                                            {isSubmitting ? 'Processing...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="p-16 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                                >
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </motion.div>
                                <h3 className="text-2xl font-syncopate font-bold text-white mb-4">Application Received</h3>
                                <p className="text-gray-400 max-w-sm mb-8">
                                    Thank you for applying. We will review your profile and reach out if there is a match.
                                </p>
                                <button
                                    onClick={resetModal}
                                    className="px-8 py-3 border border-white/20 hover:bg-white/10 rounded-full text-white text-sm font-bold uppercase tracking-widest transition-all"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ApplicationModal;

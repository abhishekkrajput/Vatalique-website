
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyMkZFFvb50QkyiQpeEaqdeU_7fQQ23tg1J8vlAlGWZiLRNsl9zWOymIGH1v3OyiZgOuA/exec';

export interface DiscoveryPayload {
    formType: string;
    date: string;
    time: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}


const APPLICATIONS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1OHCCJDl3RFsm6ld1VCh5cy4odQT41vyDgLe6htcguCQBWAcyWf8Wq8GjCXuDYOe7/exec';

export interface DiscoveryPayload {
    formType: string;
    date: string;
    time: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}

export interface ApplicationPayload {
    applicationType: 'internship' | 'fulltime';
    name: string;
    email: string;
    phone: string;
    location: string;
    role: string;
    linkedin: string;
    portfolio: string;
    resumeUrl: string;
}

export type SubmissionPayload = DiscoveryPayload | ApplicationPayload;

export const submitForm = async (payload: SubmissionPayload): Promise<boolean> => {
    try {
        // Route to appropriate backend based on payload type
        if ('applicationType' in payload) {
            // New Application Backend (Internship/Full-Time)
            await fetch(APPLICATIONS_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8", // text/plain to avoid CORS preflight issues
                },
                body: JSON.stringify(payload),
                mode: "no-cors"
            });
        } else {
            // Existing Discovery Backend (Preserved exactly as is)
            const urlWithParams = `${GOOGLE_SCRIPT_URL}?formType=${payload.formType}`;

            await fetch(urlWithParams, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(payload),
                mode: "no-cors"
            });
        }

        return true;
    } catch (error) {
        console.error("Error submitting form:", error);
        return false;
    }
};

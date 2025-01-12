import { IoArrowBackSharp, IoClose } from "react-icons/io5";
import { destroyAllModal, destroyModal } from "../../../store/modal/actions/actions";
import Button from "../../../components/button";
import { updateOfferStatus } from "../../../api/offer/put";
import { useState } from "react";
import { createJob } from "../../../api/job/create";

export default function OfferDescriptionModal({ data }) {

    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleAccept = () => {
        if (!description.trim()) {
            setError("Açıklama alanı boş bırakılamaz.");
            return;
        }
        setError("");
        updateOfferStatus(data.id);
        createJob(data.id, description);
    };

    return (
        <div className="w-[500px] h-auto bg-white rounded-md p-5">
            <header className="w-full flex items-center justify-between text-xl">
                <IoArrowBackSharp onClick={destroyModal} className="cursor-pointer" />
                <IoClose onClick={destroyAllModal} className="cursor-pointer" />
            </header>

            <div className="flex flex-col gap-y-4 pt-5">
                <h5 className="text-sm font-medium text-center">Açıklama</h5>

                <textarea
                    required={true}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="12"
                    placeholder="Talebinizle ilgili hizmet verene bir not bırak."
                    className="rounded-md p-3 text-sm font-medium outline-none border border-zinc-300 focus:border-zinc-500"
                />

                {error && <span className="text-red-600 font-medium text-sm">{error}</span>}

                <div className="grid">
                    <Button
                        onClick={handleAccept}
                        as="button"
                        variant="filled-button"
                        size="x-large"
                    >
                        Kabul et
                    </Button>
                </div>
            </div>
        </div>
    );
}

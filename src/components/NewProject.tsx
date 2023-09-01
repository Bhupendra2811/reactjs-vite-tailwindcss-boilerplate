"use client";
import { PencilIcon } from "@heroicons/react/24/outline";
// import { createNewProject } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";


// Modal.setAppElement("#modal");

const NewProject = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await createNewProject(name);
        closeModal();
    };

    return (
        <div className="flex items-center justify-center px-6 py-8 transition-all duration-200 ease-in-out hover:scale-105">
            {/* <button >+ New Project</button> */}
            <button onClick={() => openModal()} className='flex items-center gap-4 rounded-3xl  bg-white p-2 outline outline-2 outline-offset-2 drop-shadow-xl'>
                Create Task
                <PencilIcon className='w-3'></PencilIcon>
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
                className="w-3/4 rounded-xl bg-white p-8"
            >
                <h1 className="mb-6 text-5xl">New Ticket</h1>
                <form className="flex items-center" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-8">
                        <label className="text-3xl	">Title</label>
                        <input
                            placeholder="project name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-xl outline outline-1 outline-gray-200	"
                        />
                        <label className="text-xl">Description</label>
                        <textarea className="text-xl outline  outline-1	 outline-gray-200"></textarea>
                        <label className="text-xl">Priority</label>
                        <div className="border-radius: 0.5rem; flex items-center gap-10 ">
                            <button type="submit" className="rounded-lg p-2  outline outline-2 outline-gray-200 hover:bg-slate-200">High</button>
                            <button type="submit" className=" hover:bg-ff573 rounded-lg p-2 outline outline-2 outline-gray-200 hover:bg-slate-200">Low</button>
                        </div>
                        <button className="self-start	justify-self-start rounded-lg bg-slate-200 p-2 text-2xl" type="submit">Create</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default NewProject; 
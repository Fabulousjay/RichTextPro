import React, { useState } from 'react';
import FormRowInput from '../FormRowInput';
import FormRowSelect from '../FormRowSelect';
import { FaToggleOn } from "react-icons/fa";

interface EmbedOption {
    onCancel?: () => void
}

const EmbedSocial: React.FC<EmbedOption> = () => {
    const [socialProvider, setSocialProvider] = useState('Facebook');
    const [url, setUrl] = useState('');
    const [embedCode, setEmbedCode] = useState('<iframe width=“560” height=“315” src=“https://www.youtube.com/embed/9Q8di14SuE4” title=“YouTube…');
    const [disableCaption] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ socialProvider, url, embedCode, disableCaption });
    };


    return (
        <form onSubmit={handleSubmit} className="w-[659px] bg-white p-6 rounded">
            <FormRowSelect
                label="SOCIAL MEDIA PLATFORM"
                options={['Facebook', 'Instagram']}
                value={socialProvider}
                onChange={(e) => setSocialProvider(e.target.value)}
            />
            <FormRowInput
                label="URL"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <FormRowInput
                label="CODE"
                type="text"
                value={embedCode}
                onChange={(e) => setEmbedCode(e.target.value)}
            />

            <div className="mb-4 flex justify-between items-center">
                <label className="font-medium mr-2">Disable caption</label>
                <FaToggleOn size={25} style={{color:'#0A7227'}}/>

            </div>
        </form>
    );
};

export default EmbedSocial;

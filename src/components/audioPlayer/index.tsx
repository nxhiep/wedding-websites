'use client'

import { FireStorageRepo } from "@/respositories/firebase/storage";
import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const MyAudioPlayer = () => {
    const ref = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const [turnOnButton, setTurnOnButton] = useState(false);
    useEffect(() => {
        if(!window.location.host.includes('localhost')) {
            FireStorageRepo.getAudioUrl().then((url) => {
                if(ref.current) {
                    ref.current.src = url;
                    ref.current.load();
                    ref.current.play().catch(() => setTurnOnButton(true));
                }
            });
        }
    }, []);
    
    return (
        <>
            <audio
                style={{ display: 'none' }}
                ref={ref}
                autoPlay
                controls
            />
            { turnOnButton && (
                <div style={{ position: 'fixed', bottom: 40, left: 40, zIndex: 1, color: 'blue', cursor: 'pointer' }} onClick={() => {
                    const value = !playing;
                    setPlaying(value);
                    if(value) {
                        ref.current?.play();
                    } else {
                        ref.current?.pause();
                    }
                }}>{playing ? <PauseCircle color="inherit" fontSize="large" /> : <PlayCircle color="inherit" fontSize="large" />}</div>
            ) }
        </>
    );
}

export default MyAudioPlayer;
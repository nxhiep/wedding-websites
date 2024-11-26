'use client'

import { FireStorageRepo } from "@/respositories/firebase/storage";
import { useEffect, useRef, useState } from "react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const MyAudioPlayer = () => {
    const ref = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const [turnOnButton, setTurnOnButton] = useState(false);
    useEffect(() => {
        FireStorageRepo.getAudioUrl().then((url) => {
            if(ref.current) {
                ref.current.src = url;
                ref.current.load();
                ref.current.play()
                .then(() => setPlaying(true))
                .catch(() => {
                    setTurnOnButton(true);
                    setPlaying(true);
                });
            }
        });
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
                }}>{playing ? <VolumeUpIcon color="inherit" fontSize="large" /> : <VolumeOffIcon color="inherit" fontSize="large" />}</div>
            ) }
        </>
    );
}

export default MyAudioPlayer;
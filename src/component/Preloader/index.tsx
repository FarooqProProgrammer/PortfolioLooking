import { FC } from "react";
import "./index.css"

interface PreloaderProps {

}

const Preloader :FC<PreloaderProps> = () => {
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Developer,</span>
                <span>Curator,</span>
            </div>
        </div>
      );
}

export default Preloader
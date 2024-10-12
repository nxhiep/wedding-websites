import { FC } from "react";

const MyTitle: FC<({ title: string, description: string })> = ({ title, description }) => {
    return (
        <div className="my-title">
            <span className="title great-vibes">{title}</span>
            <div className="description">{description}</div>
        </div>
    );
}

export default MyTitle;
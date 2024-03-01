export default function Host({ hostname, hostpicture }) {
    return (
        <div className="hosting">
            <h3>{hostname}</h3>
            <img src={hostpicture}
                alt="hostpicture"
                className="hosting_picture" />
        </div>
    );
};
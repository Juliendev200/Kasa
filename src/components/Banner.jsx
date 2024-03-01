export default function NewBanner({ bannerimg, bannertitle }) {
    return (<div className="banner">
        <img
            src={bannerimg}
            alt="coast-img" />
        <h2>{bannertitle}</h2>
    </div>
    )
}
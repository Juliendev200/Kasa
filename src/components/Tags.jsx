export default function Tags({ taged }) {
    return (
        <div className="tags">
            {
                taged.map((tag, i) => (
                    <p key={i} className="tag">{tag}</p>
                ))
            }
        </div>
    )
};
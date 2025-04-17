import React from "react";
export default function MobileSpecialities() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>

            {expanded && (
                <>
                    <p><strong>Our Specialities:</strong></p>
                    <ul className="list-disc list-inside pl-2">
                        <li>Knowledgeable team of professionals</li>
                        <li>Complete client satisfaction</li>
                        <li>Affordable pricing</li>
                        <li>Qualitative products</li>
                        <li>Reliable services</li>
                        <li>Live In Touch With Our Customers</li>
                        <li>Easy payment mode</li>
                        <li>Wide connectivity</li>
                        <li>We listen and provide Solution</li>
                        <li>A great experience with Happy clients</li>
                        <li>Low Price Guarantee with best services</li>
                    </ul>
                </>
            )}


            <button
                className="text-emerald-700 font-semibold underline mt-2"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "See less" : "See more"}
            </button>
        </>
    );
}

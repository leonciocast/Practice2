import  { ReactNode } from "react";
//import Heading from "./Heading";

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({children, title}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}


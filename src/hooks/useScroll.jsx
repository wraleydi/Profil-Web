import { useEffect } from "react"

function useScrollReveal() {
    useEffect(() => {
        const sections = document.querySelectorAll(".section-reveal")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15
            }
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    }, [])
}

export default useScrollReveal
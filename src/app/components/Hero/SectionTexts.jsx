function SectionHeader({className}) {
    return (
        <h3 className={className}>Get Premium free for 1 month</h3>
    )
}

function SectionTexts({className, children}) {
    return (
        <p className={className}>{children}</p>
    )
}

export { SectionHeader, SectionTexts };
function SectionHeader({ badge, badgeVariant = 'primary', title, subtitle }) {
    return (
        <div className="section-header text-center">
            {badge && <span className={`badge badge-${badgeVariant}`}>{badge}</span>}
            {title}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
    )
}

export default SectionHeader

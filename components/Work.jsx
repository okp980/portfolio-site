import Image from 'next/image'
import Link from 'next/link'

const Work = ({ imageUrl, title, description, technologies, visitUrl, githubUrl }) => {
    return (
        <div className='work-card'>
            {/* <div className="work-card__image">
                    <Image src={imageUrl} alt={title} className="img" height={250} width={300} layout='responsive' objectFit='cover' />
                </div> */}
            <div className="work-card__details">
                <h1 className="work-card__title">
                    <Link legacyBehavior href={`/works/${title.toLowerCase()}`}>{title}</Link>
                </h1>
                <p className="work-card__description">
                    {description}
                </p>
                <ul className="work-card__technologies">
                    {technologies.map((tech, index) => {
                        return <li key={index}>{tech}</li>
                    })}
                </ul>
                <ul className="work-card__links">
                    <li><a href={visitUrl} target='_blank' rel="noreferrer"><i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href={githubUrl} target='_blank' rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Work
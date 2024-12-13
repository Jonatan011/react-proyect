import './CoreConcepts.css'

interface CoreConceptProps {
    src: string;
    title: string;
    description: string;
  }
  
  const CoreConcepts: React.FC<CoreConceptProps> = ({
    src,
    title,
    description,
  }) => (
    <div className="core-concept">
      <img src={src} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  export default CoreConcepts;
/*FeatureCard.tsx*/
type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon" aria-hidden="true">{icon ?? "✨"}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

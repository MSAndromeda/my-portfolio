import Container from "@/components/container";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          About Me
        </h1>
        <p className="text-secondary max-w-lg text-sm md:text-sm pt-4">
          This is about me.
        </p>
      </Container>
    </div>
  );
}

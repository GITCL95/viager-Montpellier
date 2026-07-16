import { Icon } from "./Icon";

type Step = {
  title: string;
  description: string;
  icon: "search" | "calculator" | "key";
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-3">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-3xl bg-white p-6 pt-8 ring-1 ring-border"
        >
          <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {index + 1}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon name={step.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-bold text-secondary">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

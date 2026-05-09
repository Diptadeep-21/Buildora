import {
  ReactNode,
} from "react";

interface Props {

  icon: ReactNode;

  title: string;

  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: Props) {

  return (

    <div className="w-full max-w-[340px] min-h-[320px] bg-white rounded-[36px] border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-10 flex flex-col items-center text-center">

      {/* ICON */}

      <div className="w-20 h-20 rounded-3xl bg-black text-white flex items-center justify-center mb-8 shrink-0 shadow-md">

        {icon}

      </div>

      {/* TITLE */}

      <h3 className="text-3xl font-bold text-black leading-tight mb-5">

        {title}

      </h3>

      {/* DESCRIPTION */}

      <p className="text-gray-600 leading-relaxed text-lg">

        {description}

      </p>

    </div>
  );
}
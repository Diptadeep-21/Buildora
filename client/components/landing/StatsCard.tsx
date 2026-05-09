interface Props {

  value: string;

  label: string;
}

export default function StatsCard({
  value,
  label,
}: Props) {

  return (

    <div className="w-full max-w-[420px] min-h-[240px] bg-white rounded-[36px] border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center text-center px-10 py-12">

      {/* VALUE */}

      <h3 className="text-7xl font-bold text-black leading-none">

        {value}

      </h3>

      {/* LABEL */}

      <p className="mt-8 text-gray-600 text-2xl leading-relaxed">

        {label}

      </p>

    </div>
  );
}
export default function LoadingOverlay({
  text,
}: {
  text: string;
}) {

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 text-white px-10 py-8 rounded-3xl shadow-2xl">

        <div className="animate-pulse text-2xl font-semibold">

          {text}

        </div>

      </div>

    </div>
  );
}
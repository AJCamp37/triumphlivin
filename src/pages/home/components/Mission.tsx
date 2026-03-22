export default function Mission() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            
            <h2 className="text-5xl font-bold text-slate-800 leading-tight">
              Building Foundations<br />
              For Lasting<br />
              Change
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe everyone deserves a safe place to call home. Our mission is to provide more than just affordable housing – we offer comprehensive support services that empower individuals to rebuild their lives with dignity and purpose.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-2xl relative">
              <div className="absolute top-8 left-8 text-white/60 text-sm font-semibold tracking-wider">
                OUR MISSION
              </div>

              <div className="mt-12 mb-8">
                <p className="text-3xl leading-relaxed" style={{ lineHeight: '1.6' }}>
                  At Triumph Independent Living Homes we are committed to providing dignified, supportive housing solutions that address the unique challenges faced by seniors, veterans, individuals in recovery, and those re-entering society. Through comprehensive support services, community building; we create pathways to stability, independence, and lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
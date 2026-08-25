function Pillars() {
    return (
        <section className="section-reveal py-12 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Areas of Expertise</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Core Pillars of Engineering Physics</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md transition group text-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-microchip text-lg"></i>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Instrumentation & Control</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">SCADA, PLC, IoT Sensors, Automation, Signal Processing</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md transition group text-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-building text-lg"></i>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Building Physics</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">Room Acoustics, Daylighting, HVAC & Thermal Efficiency</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md transition group text-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-atom text-lg"></i>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Experimental Materials</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">Thin Film Characterization, Nanotechnology & Piezoelectrics</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md transition group text-center">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-calculator text-lg"></i>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Multiphysics Computation</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">COMSOL Simulation, MATLAB, CFD & Finite Element Analysis (FEA)</p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:shadow-md transition group text-center col-span-2 md:col-span-1">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <i className="fa-solid fa-leaf text-lg"></i>
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">Green Energy</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">Photovoltaic Solar Systems, Microgrids & Energy Harvesting</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pillars
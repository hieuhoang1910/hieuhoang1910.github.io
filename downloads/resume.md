# Hieu Hoang

**Application Engineer at Vinnotek | Aerospace Engineer - Propulsion, Thermal-Fluid Analysis, Spacecraft Systems, Engineering Automation**  
+84 86 550 8438 | hieuhoang1910@outlook.com | https://hieuhoang1910.github.io | https://github.com/hieuhoang1910 | https://www.linkedin.com/in/hieu-hoang-8b195224a/

## Summary

Aerospace engineer (B.S., Missouri University of Science and Technology, May 2025) currently working as an Application Engineer at Vinnotek across copper-AM thermal design, additive manufacturing screening, and AI-assisted engineering automation. University experience includes the NASA-backed M3 (Multi-Mode Mission) CubeSat, launched on a SpaceX Falcon 9 in March 2024 under the CubeSat Launch Initiative, and leading a CubeSat-class resistojet propulsion upgrade effort. Strong base in thermal-fluid modeling, compressible flow, experimental data reduction, Python/MATLAB/C++ engineering computation, CAD, and technical documentation from model derivation through test planning.

## Education

**Missouri University of Science and Technology** - B.S. Aerospace Engineering, May 2025  
Relevant coursework: heat transfer, thermodynamics, thermal-fluid mechanics, propulsion systems, aerodynamics, aerospace structures, orbital mechanics, compressible flow, gas dynamics, vehicle efficiency, optimization, experimental methods, CAD/CAE, engineering computation. GPA: 3.15/4.00.

**John Wood Community College** - A.S. Engineering, 2021  
Co-founder, Engineering Club.

## Experience and Leadership

**Vinnotek** - Application Engineer  
2026 - Present

- Built the Cold Plate Master Baseline Viewer workflow for copper-AM GPU cold-plate design, connecting validated Python solvers to an internal React/TypeScript review interface with 3D geometry viewing, candidate comparison, KPI stackups, optimizer, report export, and manufacturability status.
- Documented the reusable master baseline framework for wavy fins, straight fins, pin fins, TPMS/gyroid, lattice, and hybrid core studies while separating geometry-ranking metrics from full junction-to-coolant claim logic.
- Added coverage-ratio checks, sensitivity cases, CSV/JSON/Markdown reporting, and validation gates for supplier coupon testing, CFD/CHT, roughness, open-channel area, and 575 W thermal margin review.
- Designed a local AI pre-sales automation workflow using Ollama/qwen3:14b, n8n, PowerShell, JSON pipelines, and Excel scoring contracts to rank industrial AM prospects with human review before CRM handoff.
- Created engineering briefs for adaptive FDM and continuous-fiber drone-frame development, including design variables, manufacturability constraints, test methods, and intern work packages.

**Missouri S&T Satellite Research Team (M-SAT)** - Mechanical Integration, C&DH, and Propulsion Member; Propulsion Research Team Five Lead  
Rolla, MO | Aug. 2023 - May 2025

- Supported the NASA-backed M3 (Multi-Mode Mission) 3U CubeSat, launched on a SpaceX Falcon 9 in March 2024 under NASA's CubeSat Launch Initiative (CSLI), flight-testing an experimental multi-mode thruster.
- Programmed and tested flight computer and EPS boards in C++ for system verification and telemetry.
- Integrated radio hardware with the Iridium satellite network to enable bidirectional communication.
- Led cleanroom assembly of wire harnesses and subsystems, meeting launch-readiness standards.
- Performed unit testing of cold-gas thrusters in vacuum using Arduino-controlled solenoids.
- Led the Spring 2025 Team Five propulsion research effort to upgrade the CubeSat-class R134a cold-gas thruster setup into a warm-gas resistojet concept.
- Developed gas-side heating, internal convection, cylindrical conduction, and nichrome heater-wire sizing calculations, estimating approximately 35.64 W of heating power and a required inner wall temperature near 380-385 deg C.
- Analyzed prior vacuum-chamber cold-gas thrust data and identified likely non-linear scaling causes including distributor pressure drop, flow starvation, turbulence, and pressure recovery limits.
- Collaborated with thermal, mechanical, and software teams to ensure subsystem compatibility.

**CR Metals Inc.** - CNC Laser Technician  
St. Louis, MO | June 2021 - June 2022

- Interpreted engineering drawings and AutoCAD layouts for manufacturing custom metal parts.
- Operated Amada CNC laser machines to fabricate ductwork and bracket assemblies with tight tolerances.
- Streamlined cutting sequences to optimize material use and reduce cycle time.

## Selected Engineering Projects

**Resistojet Nozzle Thruster Upgrade** - Propulsion, heat transfer, spacecraft systems

- Modeled a warm-gas resistojet upgrade for an existing R134a cold-gas CubeSat propulsion test system as capstone team lead for thermal and structural design.
- Connected measured cold-gas thrust baseline data (18.76 mN single-thruster) to exhaust velocity targets and heat-addition requirements.
- Produced AutoCAD component models, Python thermal simulations, material recommendations, and AIAA-style technical documentation.

**Cold Plate Master Baseline Viewer** - Thermal design, copper AM, Python, React/TypeScript

- Built an internal engineering viewer for GPU cold-plate baseline review, including live candidate comparison, junction-to-coolant KPI tracking, manufacturability status, 3D geometry viewing, optimizer support, and report export.
- Kept the browser tied to validated Python solvers and documented decision gates for coverage, pressure drop, pump power, supplier coupon testing, CFD/CHT, roughness, and open-channel area.

**Shock Tube Fanno Flow Analysis** - Compressible flow, Python, pressure data

- Processed Kistler pressure transducer voltage data from shock-tube experiments using calibration, smoothing, pressure ratios, normal-shock relations, and Fanno-flow equations.
- Documented uncertainty sources including timing error, reflected shocks, and inconsistent transient pressure states.

**SR-30 Gas Turbine Performance Analysis** - Thermodynamics, Python, Excel

- Analyzed SR-30 turbojet lab data at 50,000 and 70,000 RPM to estimate thrust, compressor work, turbine work, fuel-flow behavior, and thermal efficiency.
- Flagged physical caveats where sign conventions, sensor mapping, or units produced unrealistic derived values.

**Wind Tunnel Wing Aerodynamics Analysis** - Aerodynamics, data reduction

- Processed wing force and moment data to compute lift, drag, and moment coefficients and drag polar behavior across angle-of-attack sweeps at approximately Re 200,000 and Re 500,000.

**Modal Wing Vibration Analysis** - Structures, vibrations, Python

- Analyzed wing modal response across measurement nodes to identify natural frequencies near 16.67-16.93 Hz, damping, amplitude distribution, and quality-factor trends with contour visualization.

**Turbofan Cycle Performance Modeling** - Propulsion, MATLAB, Python

- Modeled specific thrust and TSFC across compressor pressure-ratio sweeps (1 to 15) and bypass-ratio sweeps at M0 = 2.5, static sea-level, and M0 = 0.85 flight cases.

**Probabilistic Engineering Design and Optimization** - RSM, Monte Carlo, regression

- Applied response surface methodology, factorial design, regression modeling, Monte Carlo simulation, confidence intervals, and KKT-based optimization to engineering design problems.

**Balloon Satellite "Poseiden"** - Aerospace systems, sensors

- Worked on a Team Helios balloon satellite measuring temperature, pressure, altitude, and humidity during flight.

**Aircraft Senior Design and Flight Testing** - Aerospace design, test planning

- Contributed to aircraft senior design and flight-test analysis activities involving aerospace design methods, data collection, and technical reporting.

**Engineering Code Repository** - C++, MATLAB, Python, C

- Maintains a public GitHub repository with engineering projects including FEA beam analysis, shock tube processing, turbojet analysis, uncertainty/RSM analysis, vehicle efficiency modeling, and embedded-style camera system code.

## Technical Skills

**Aerospace and analysis:** propulsion systems, cold-gas thrusters, resistojet thermal modeling, compressible flow, Fanno flow, normal shock and isentropic relations, gas turbine analysis, turbofan cycle modeling, aerodynamics, heat transfer, thermal resistance networks, finite difference methods, experimental data reduction.

**Programming and computation:** Python, NumPy, Matplotlib, MATLAB, Octave, C++, C, Arduino, PowerShell, Node.js, TypeScript, React, Three.js, Excel engineering computation, Monte Carlo simulation, response surface methods, root solving, sensitivity analysis.

**CAD, documentation, and tools:** AutoCAD, SolidWorks, Fusion 360, FreeCAD, CQ-Editor, ZW3D and CAD tool evaluation, LaTeX, Overleaf, AIAA report formatting, technical documentation, Git, VS Code.

**Hardware and testing:** Arduino MEGA 2560, solenoid valve control, 12 V DC systems, NPN transistor switching, pressure transducers, thermocouple planning, vacuum-chamber test planning, wire harnessing, cleanroom assembly, wind-tunnel data systems, gas turbine lab data, scale-based thrust measurement.

**Additive manufacturing and automation:** copper AM screening, LPBF/LMM/FDM process comparison, DfAM constraints, continuous-fiber FDM planning, n8n pipelines, local LLM workflows, AI-assisted coding, AI-assisted technical documentation.

## References

Available upon request.

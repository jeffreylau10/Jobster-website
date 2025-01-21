export default function OurWorkTech() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-0">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Our IT Solutions</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in">Transforming HR with Cutting-Edge Technology</h2>
        
        <p className="text-lg mb-12 animate-fade-in">
          At Jobster, we bridge IT innovation with HR excellence, offering tailored solutions to streamline workflows, enhance productivity, and unlock workforce potential.
        </p>
        
        <h3 className="text-2xl font-bold mb-6 animate-fade-in">Key IT Services</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "MS 365 Integration",
              description: "Optimize collaboration with tools like SharePoint, Teams, and more."
            },
            {
              title: "Workflow Automation",
              description: "Speed up processes like approvals and compliance with Power Automate."
            },
            {
              title: "Custom HR Apps",
              description: "Build applications for leave management, onboarding, and performance tracking."
            },
            {
              title: "Workforce Analytics",
              description: "Get actionable insights with Power BI for recruitment, productivity, and payroll."
            },
            {
              title: "AI-Powered HR Tools",
              description: "Automate hiring, engagement, and resume screening with AI."
            },
            {
              title: "Secure Cloud Solutions",
              description: "Protect employee data with advanced cloud and compliance tools."
            },
            {
              title: "SharePoint Development",
              description: "Simplify HR with centralized policy hubs and automated compliance tracking."
            }
          ].map((service, index) => (
            <div key={index} className="animate-fade-in">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-lg animate-fade-in">
          We specialize in seamlessly integrating IT solutions with HR processes, empowering businesses to enhance workforce management, streamline operations, and drive employee satisfaction.
        </p>
      </div>
    </div>
  )
}


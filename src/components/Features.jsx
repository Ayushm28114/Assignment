const Features = () => {
  const features = [
    {
      icon: "🎤",
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI feedback and real-time pronunciation analysis to boost your confidence.",
      color: "blue"
    },
    {
      icon: "📝",
      title: "Mock Tests",
      description: "Complete practice tests that simulate real IELTS conditions with detailed performance analytics.",
      color: "green"
    },
    {
      icon: "🤖",
      title: "AI Band Score Prediction",
      description: "Advanced AI algorithms predict your band score and provide personalized improvement recommendations.",
      color: "purple"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Instructors",
      description: "Learn from certified IELTS trainers with years of experience and proven track records.",
      color: "orange"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 shadow-blue-200",
      green: "from-green-500 to-green-600 shadow-green-200",
      purple: "from-purple-500 to-purple-600 shadow-purple-200",
      orange: "from-orange-500 to-orange-600 shadow-orange-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-indigo-400 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">IELTSPro?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with expert instruction 
            to deliver the most effective IELTS preparation experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => {/* Feature details would be shown here */}}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 group-hover:border-blue-200 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Arrow */}
                <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border border-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-12 w-4 h-4 border border-white rounded-full"></div>
              <div className="absolute bottom-8 right-4 w-10 h-10 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                🎯 Ready to Start Your IELTS Journey?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who achieved their target band scores with IELTSPro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {/* 7-day free trial registration would be implemented here */}}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl transform hover:scale-105"
                >
                  🎁 Start 7-Day Free Trial
                </button>
                <button 
                  onClick={() => {/* Demo scheduling would be implemented here */}}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
                >
                  📅 Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

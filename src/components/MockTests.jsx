const MockTests = () => {
  return (
    <section id="mock-tests" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📝 IELTS Mock Tests
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice with <span className="font-semibold text-blue-700">real IELTS exam conditions</span> and get instant feedback on your performance.
          </p>
        </div>

        {/* Test Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Academic IELTS</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Complete academic test simulation with reading, writing, listening, and speaking modules.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                3 hours full test
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant band score prediction
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Detailed performance analysis
              </li>
            </ul>
            <button 
              onClick={() => {/* Academic IELTS test interface would open here */}}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Take Academic Test
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">General Training</h3>
            </div>
            <p className="text-gray-600 mb-6">
              General training test for immigration and work purposes with practical scenarios.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                2.5 hours full test
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Real-world scenarios
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Immigration focused
              </li>
            </ul>
            <button 
              onClick={() => {/* General Training test interface would open here */}}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Take General Test
            </button>
          </div>
        </div>

        {/* Quick Practice */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Practice Tests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => {/* Listening practice would start here */}}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-4 px-6 rounded-lg transition-colors font-semibold"
            >
              🎧 Listening<br/>
              <span className="text-sm font-normal">30 min</span>
            </button>
            <button 
              onClick={() => {/* Reading practice would start here */}}
              className="bg-green-100 hover:bg-green-200 text-green-800 py-4 px-6 rounded-lg transition-colors font-semibold"
            >
              📖 Reading<br/>
              <span className="text-sm font-normal">60 min</span>
            </button>
            <button 
              onClick={() => {/* Writing practice would start here */}}
              className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-4 px-6 rounded-lg transition-colors font-semibold"
            >
              ✍️ Writing<br/>
              <span className="text-sm font-normal">60 min</span>
            </button>
            <button 
              onClick={() => {/* Speaking practice would start here */}}
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 py-4 px-6 rounded-lg transition-colors font-semibold"
            >
              🎤 Speaking<br/>
              <span className="text-sm font-normal">15 min</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MockTests

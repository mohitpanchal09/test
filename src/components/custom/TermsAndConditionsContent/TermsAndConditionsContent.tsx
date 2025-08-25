import React from 'react';

type SectionData = {
  title: string;
  content: string[];
  list?: string[];
  afterList?: string;
};

type TermsAndConditionsContentProps = {
  sections: SectionData[];
};

const TermsAndConditionsContent: React.FC<TermsAndConditionsContentProps> = ({ sections }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Website Terms and Conditions of Use
        </h1>
      </div>

      <div className="space-y-12">
        {sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              {section.title}
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              {section.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {section.list && (
                <ul className="list-disc list-inside space-y-2">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              {section.afterList && <p>{section.afterList}</p>}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsContent;

import React, { useRef } from "react"; import emailjs from "emailjs-com"; import toast, { Toaster } from "react-hot-toast";
import { Helmet } from 'react-helmet';

<Helmet>
  <link rel="canonical" href="https://accesstofinance.com.ng/eoi" />
  <meta property="og:url" content="https://accesstofinance.com.ng" />
</Helmet>
const ExpressionOfInterestForm = () => { const formRef = useRef();

const handleSubmit = async (e) => { e.preventDefault(); const form = formRef.current; const formData = new FormData(form);

try {
  await emailjs.sendForm(
    "service_etmae5u",
    "template_jpu42g4",
    form,
    "OoZgk-OC0OfwrnGQu"
  );

  await fetch("https://script.google.com/macros/s/AKfycbw5ZNZO7yTxeHCZwa1xjXeNRBS33BLjqrtbyemLhI4eVybkO3_9hAwcPdyyDbBTSwY/exec", {
    method: "POST",
    body: formData,
  });

  toast.success("Form submitted successfully!");
  form.reset();
} catch (error) {
  console.error("Submission error:", error);
  toast.error("There was a problem submitting the form.");
}

};

return ( <> <Toaster position="top-right" reverseOrder={false} /> <form
ref={formRef}
onSubmit={handleSubmit}
className="bg-white p-6 rounded-xl shadow-md space-y-6 border border-gray-300 max-w-3xl mx-auto mt-10"
> <h2 className="text-2xl font-bold text-primary mb-4 text-center"> 📋 Access to Finance Program – Expression of Interest </h2>

{/* Section 1 */}
    <div className="grid grid-cols-1 gap-4">
      <input name="fullName" placeholder="Full Name / Organization" className="inputStyle" required />
      <input name="contactPerson" placeholder="Contact Person (if organization)" className="inputStyle" />
      <input name="phone" placeholder="Phone Number" className="inputStyle" required />
      <input name="email" type="email" placeholder="Email Address" className="inputStyle" required />
      <input name="location" placeholder="Location / Address (State, LGA)" className="inputStyle" />
    </div>

    {/* Section 2 */}
    <div>
      <label className="block font-semibold">Type of Stakeholder</label>
      <select name="stakeholderType" className="inputStyle" required>
        <option value="">Select one</option>
        <option>Cooperative Society</option>
        <option>Agro-Processing Firm</option>
        <option>Integrated Farm</option>
        <option>Youth or Women-led Agro SME</option>
        <option>Financial Institution</option>
        <option>Technical Partner / Consultant</option>
        <option>Government or Donor Agency</option>
        <option>Other</option>
      </select>
    </div>

    {/* Section 3 */}
    <div>
      <label className="block font-semibold mb-1">Primary Activity</label>
      {["Crop Production", "Livestock / Poultry", "Agro-Processing", "Input Supply", "Aggregation / Marketing", "Renewable Energy / Agro-Infrastructure", "Other"].map((activity) => (
        <label key={activity} className="block">
          <input type="checkbox" name="primaryActivity" value={activity} className="mr-2" />
          {activity}
        </label>
      ))}

      <select name="years" className="inputStyle mt-4">
        <option value="">Years of Operation</option>
        <option>&lt;1</option>
        <option>1–3</option>
        <option>4–7</option>
        <option>8+</option>
      </select>

      <input name="members" placeholder="Number of Members / Employees" className="inputStyle mt-3" />
      <label className="block mt-2 font-medium">Operate on contiguous land with other farmers?</label>
      <label className="mr-4"><input type="radio" name="contiguousLand" value="Yes" className="mr-1" />Yes</label>
      <label><input type="radio" name="contiguousLand" value="No" className="mr-1" />No</label>
      <textarea name="description" placeholder="Brief description of your operation or business" className="inputStyle mt-3" />
    </div>

    {/* Section 4 */}
    <div>
      <label className="block font-semibold mb-1">What support do you need?</label>
      {["Access to loans or credit", "Business plan support", "Linkage to processors/off-takers", "Access to energy/power for operations", "Technical training or extension", "Other"].map((support) => (
        <label key={support} className="block">
          <input type="checkbox" name="supportTypes" value={support} className="mr-2" />
          {support}
        </label>
      ))}
      <input name="loanSize" placeholder="Estimated loan size (if applying)" className="inputStyle mt-4" />
    </div>

    {/* Section 5 */}
    <div>
      <label className="block font-semibold mb-2">Upload Documents (optional)</label>
      <input type="file" name="file1" className="mb-3" />
      <input type="file" name="file2" />
    </div>

    {/* Section 6 */}
    <div>
      <label className="block mb-2 font-semibold">Declaration</label>
      <label><input type="radio" name="declaration" value="Yes" className="mr-1" required />Yes</label>
      <label className="ml-4"><input type="radio" name="declaration" value="No" className="mr-1" />No</label>
      <input name="signature" placeholder="Signature (typed name)" className="inputStyle mt-3" required />
      <input type="date" name="date" className="inputStyle mt-3" required />
    </div>

    {/* Submit */}
    <button type="submit" className="w-full bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded transition-all duration-300">
      📤 Submit Application
    </button>
  </form>
</>

); };

export default ExpressionOfInterestForm;


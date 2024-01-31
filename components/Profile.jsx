import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full z=-10">
      <h1 className="head_text text-left">
        <span className="blue_gradient text-3xl mb-3 block">
          {name} Profile
        </span>
      </h1>
      <p className="desc text-left font-medium text-gray-800">{desc}</p>

      <div className="mt-4 mx-8 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;

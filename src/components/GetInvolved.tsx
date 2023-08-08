import Card from "./Card";

export default function GetInvolved() {
  return (
    <div className="flex flex-col items-center justify py-10 bg-red min-h-screen">
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-black text-center">
            Get Involved
          </h2>
          <div className="w-16 h-1 bg-green-500 mb-8"></div>
        </div>

        <div className="flex justify-center">
          <Card
            title="Want to donate land?"
            description="Let us plant tree on them"
            buttonText="Join"
            icon="land_icon.svg"
          />

          <Card
            title="Want to offset carbon?"
            description="Donate a few trees"
            buttonText="Join"
            icon="tree_icon.svg"
          />

          <Card
            title="Want to help us?"
            description="Lend us your hand in planting trees"
            buttonText="Join"
            icon="help_icon.svg"
          />
        </div>
      </div>
    </div>
  );
}

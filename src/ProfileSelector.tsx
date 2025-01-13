import {Heart, X} from "lucide-react";

export const ProfileSelector = () => {
  // const [profile, setProfile] = useState<Profile | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  //
  // useEffect(() => {
  //   fetchProfile().then((profile) => {
  //     setProfile(profile);
  //     setLoading(false);
  //   });
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
      <div className="rounded-lg overflow-hidden bg-white shadow-lg">
          <div className="relative">
              <img src="http://127.0.0.1:8081/017e4530-49b4-4937-8adf-985a82595d53.jpg"/>
              <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
                  <h2 className="text-2xl font-bold text-center">Foo Bar, 30</h2>
              </div>
          </div>
          <div className="p-4">
              <p className="text-gray-800">I like long walks on the beach and candlelit dinners.</p>
          </div>
          <div className="p-4 flex justify-center space-x-4">
              <button className="text-white p-4 bg-red-500 hover:bg-red-600 rounded-full" onClick={() => console.log("left")}>
                  <X size={22}/>
              </button>
              <button className="text-white p-4 bg-green-500  hover:bg-green-600 rounded-full" onClick={() => console.log("right")}>
                  <Heart size={22}/>
              </button>
          </div>
      </div>
  );
}
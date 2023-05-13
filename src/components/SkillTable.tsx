export default function SkillTable() {
  return (
    <>
      <div className={"flex lg:w-auto md:w-144 w-96"}>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className={"border-b text-xl font-bold"}>
                  <tr>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Languages
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Frameworks
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Database
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Other
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className={"text-md text-gray-900 font-bold px-6 py-4 whitespace-nowrap color-purple"}>
                      Javascript
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      NextJS
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      MongoDB
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      REST-API
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      Typescript
                    </td>
                    <td className={"text-md text-gray-900 font-bold px-6 py-4 whitespace-nowrap color-purple"}>
                      NestJS
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      MySQL
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      Docker/Kubernetes
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      GoLang
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      Gin
                    </td>
                    <td className="text-md text-gray-900 px-6 py-4 whitespace-nowrap">
                      /
                    </td>
                    <td className={"text-md text-gray-900 font-bold px-6 py-4 whitespace-nowrap color-purple"}>
                      Syslog/Grafana
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
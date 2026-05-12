"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    useParams,
} from "next/navigation";

import DynamicForm from "@/components/dynamic/DynamicForm";

import DynamicTable from "@/components/dynamic/DynamicTable";

import API from "@/lib/api";

import CSVImporter from "@/components/upload/CSVImporter";

import {
    useAppConfig,
} from "@/context/AppConfigContext";

export default function GeneratedAppPage() {


    const params =
        useParams();

    const { setConfig } =
        useAppConfig();

    const [records, setRecords] =
        useState<any[]>([]);

    const [config, setLocalConfig] =
        useState<any>(null);

    /*
      FETCH CONFIG
    */

    useEffect(() => {

        const fetchConfig =
            async () => {

                try {

                    const response =
                        await API.get(
                            "/configs"
                        );

                    const configs =
                        response.data.configs;

                    const found =
                        configs.find(
                            (c: any) =>
                                c.id ===
                                params.id
                        );

                    setLocalConfig(found);

                    setConfig(found.config);
                } catch (error) {

                    console.log(error);
                }
            };

        fetchConfig();

    }, [params.id]);

    /*
      SUBMIT RECORD
    */

    const handleSubmit =
        async (
            entityName: string,
            data: any
        ) => {

            try {

                await API.post(
                    "/records",

                    {
                        entityName,
                        data,
                    }
                );

                setRecords((prev) => [

                    ...prev,

                    data,
                ]);

            } catch (error) {

                console.log(error);
            }
        };

    if (!config) {

        return (
            <div className="p-10 text-white">
                Loading...
            </div>
        );
    }

    const entity =
        config.config
            .pages[0]
            .entities[0];

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">

            <h1 className="text-4xl font-bold mb-8">
                {config.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

                <CSVImporter
                    entityName={entity.name}

                    onImport={(importedRecords) =>
                        setRecords((prev) => [
                            ...prev,
                            ...importedRecords,
                        ])
                    }
                />

                <DynamicForm
                    entity={entity}
                    onSubmit={
                        handleSubmit
                    }
                />

                <DynamicTable
                    entity={entity}
                    records={records}
                />

            </div>

        </main>
    );
}
"use client";

import {
    useParams,
} from "next/navigation";

import {
    useAppConfig,
} from "@/context/AppConfigContext";

import DynamicForm from "@/components/dynamic/DynamicForm";

import DynamicTable from "@/components/dynamic/DynamicTable";

import DynamicSidebar from "@/components/layout/DynamicSidebar";

import {
    useState,
} from "react";

export default function GeneratedPage() {

    const params =
        useParams();

    const { config } =
        useAppConfig();

    const [records, setRecords] =
        useState<any[]>([]);

    if (!config) {

        return (
            <div className="p-10 text-white">
                No app loaded
            </div>
        );
    }

    const page =
        config.pages.find(
            (p: any) =>
                p.route ===
                params.route
        );

    if (!page) {

        return (
            <div className="p-10 text-white">
                Page not found
            </div>
        );
    }

    const entity =
        page.entities[0];

    return (
        <div className="flex min-h-screen bg-slate-950 text-white">

            <DynamicSidebar
                pages={config.pages}
            />

            <main className="flex-1 p-8">

                <h1 className="text-4xl font-bold mb-8">
                    {page.name}
                </h1>

                <div className="grid md:grid-cols-2 gap-8">

                    <DynamicForm
                        entity={entity}

                        onSubmit={(
                            entityName,
                            data
                        ) => {

                            console.log(
                                entityName,
                                data
                            );

                            setRecords((prev) => [
                                ...prev,
                                data,
                            ]);
                        }}
                    />

                    <DynamicTable
                        entity={entity}
                        records={records}
                    />

                </div>

            </main>

        </div>
    );
}
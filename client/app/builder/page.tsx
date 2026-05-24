"use client";

import { useEffect, useState } from "react";

import DynamicForm from "@/components/dynamic/DynamicForm";
import DynamicTable from "@/components/dynamic/DynamicTable";

import ConfigUploader from "@/components/upload/ConfigUploader";

import { AppConfig } from "@/types/config.types";

import { validateConfig } from "@/lib/configValidator";

export default function BuilderPage() {

    const [config, setConfig] =
        useState<AppConfig | null>(null);

    /*
      STORE RECORDS ENTITY-WISE
    */

    const [records, setRecords] =
        useState<Record<string, any[]>>({});

    /*
      LOAD SAVED DATA..
    */

    useEffect(() => {

        const generatedConfig =
            localStorage.getItem(
                "generatedConfig"
            );

        if (generatedConfig) {

            const parsed =
                JSON.parse(
                    generatedConfig
                );

            setConfig(parsed);

            localStorage.removeItem(
                "generatedConfig"
            );
        }

        const savedConfig =
            localStorage.getItem(
                "appConfig"
            );

        const savedRecords =
            localStorage.getItem(
                "records"
            );

        if (savedConfig) {

            setConfig(
                JSON.parse(savedConfig)
            );
        }

        if (savedRecords) {

            setRecords(
                JSON.parse(savedRecords)
            );
        }

    }, []);

    /*
      SAVE RECORDS
    */

    useEffect(() => {

        localStorage.setItem(
            "records",
            JSON.stringify(records)
        );

    }, [records]);

    /*
      SAVE CONFIG
    */

    useEffect(() => {

        if (config) {

            localStorage.setItem(
                "appConfig",
                JSON.stringify(config)
            );
        }

    }, [config]);

    /*
      HANDLE CONFIG UPLOAD
    */

    const handleConfigLoad = (
        uploadedConfig: AppConfig
    ) => {

        try {

            validateConfig(
                uploadedConfig
            );

            setConfig(
                uploadedConfig
            );

            /*
              RESET RECORDS
            */

            setRecords({});

            localStorage.removeItem(
                "records"
            );

            alert(
                "Config Loaded Successfully"
            );

        } catch (error: any) {

            alert(
                error.message
            );
        }
    };

    /*
      HANDLE FORM SUBMISSION
    */

    const handleSubmit = (
        entityName: string,
        data: any
    ) => {

        setRecords((prev) => ({

            ...prev,

            [entityName]: [

                ...(prev[entityName] || []),

                data,
            ],
        }));
    };

    return (

        <main className="min-h-screen bg-slate-950 text-white p-8">

            {/* PAGE TITLE */}

            <h1 className="text-4xl font-bold mb-8">

                AI App Generator

            </h1>

            {/* CONFIG UPLOADER */}

            <ConfigUploader
                onConfigLoad={
                    handleConfigLoad
                }
            />

            {/* GENERATED APP */}

            {config ? (

                <div className="mt-10">

                    {/* APP NAME */}

                    <h2 className="text-3xl font-bold mb-10">

                        {config.appName}

                    </h2>

                    {/* PAGES */}

                    {config.pages.map(
                        (page, index) => (

                            <div
                                key={
                                    page.name || index
                                }

                                className="mb-20"
                            >

                                {/* PAGE TITLE */}

                                <h2 className="text-2xl font-bold mb-8">

                                    {page.name}

                                </h2>

                                {/* ENTITIES */}

                                {page.entities.map(
                                    (entity) => (

                                        <div
                                            key={entity.name}

                                            className="
                                                grid
                                                md:grid-cols-2
                                                gap-10
                                                mb-14
                                            "
                                        >

                                            {/* FORM */}

                                            <DynamicForm
                                                entity={entity}

                                               onSubmit={handleSubmit}
                                            />

                                            {/* TABLE */}

                                            <DynamicTable
                                                entity={entity}

                                                records={
                                                    records[
                                                        entity.name
                                                    ] || []
                                                }
                                            />

                                        </div>
                                    )
                                )}

                            </div>
                        )
                    )}

                </div>

            ) : (

                <div className="mt-10 text-gray-400 text-lg">

                    Upload a JSON config
                    to generate your app.

                </div>
            )}

        </main>
    );
}

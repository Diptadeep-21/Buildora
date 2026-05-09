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

    const [records, setRecords] =
        useState<any[]>([]);

    /*
      LOAD SAVED DATA
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
            localStorage.getItem("appConfig");

        const savedRecords =
            localStorage.getItem("records");

        if (savedConfig) {
            setConfig(JSON.parse(savedConfig));
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
            validateConfig(uploadedConfig);

            setConfig(uploadedConfig);

            setRecords([]);

            localStorage.removeItem(
                "records"
            );

            alert(
                "Config Loaded Successfully"
            );
        } catch (error: any) {
            alert(error.message);
        }
    };

    /*
      HANDLE FORM SUBMISSION
    */

    const handleSubmit = (
        data: any
    ) => {
        setRecords((prev) => [
            ...prev,
            data,
        ]);
    };

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">
                AI App Generator
            </h1>

            <ConfigUploader
                onConfigLoad={
                    handleConfigLoad
                }
            />

            {config ? (
                <div className="mt-10">
                    <h2 className="text-3xl font-bold mb-6">
                        {config.appName}
                    </h2>

                    {config.pages.map((page) => (

                        <div
                            key={page.route}
                            className="mb-16"
                        >

                            <h2 className="text-2xl font-bold mb-6">
                                {page.name}
                            </h2>

                            {page.entities.map(
                                (entity) => (

                                    <div
                                        key={entity.name}
                                        className="grid md:grid-cols-2 gap-8 mb-12"
                                    >

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
                                )
                            )}

                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-10 text-gray-400">
                    Upload a JSON config
                    to generate app
                </div>
            )}
        </main>
    );
}
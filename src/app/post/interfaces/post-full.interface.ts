export interface IFullPost {
    vid: string;
    uid: string;
    title: string;
    log: string;
    status: string;
    comment: string;
    promote: string;
    sticky: string;
    nid: string;
    type: string;
    language: string;
    created: string;
    changed: string;
    tnid: string;
    translate: string;
    revision_timestamp: string;
    revision_uid: string;
    body: {
        ru: {
            "0": {
                value: string;
                summary: string;
                format: string;
                safe_value: string;
                safe_summary: string;
            }
        }
    };
    field_answer_count: {
        en: {
            "0": {
                count: string;
            }
        };
        ru: {
            "0": {
                count: string;
            }
        };
        und: {
            "0": {
                count: string;
            }
        };
    };
    field_notify_p: {
        ru: {
            "0": {
                value: string;
            }
        };
    };
    field_category: {
        und: {
            "0": {
                tid: string;
            }
        };
    };
    field_vote: {
        und: {
            "0": {
                vud_widget: string;
                votingapi_tag: string;
            }
        };
    };
    rdf_mapping: object;
    cid: string;
    last_comment_timestamp: string;
    last_comment_name?: string;
    last_comment_uid: string;
    comment_count: string;
    name: string;
    picture: string;
    data: string;
    path: string;
}